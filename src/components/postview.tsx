import { type RouterOutputs } from "~/utils/api";

import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number]
export const PostView = (props: PostWithUser) => {
    const { post, author } = props;
    return (
        <div key={post.id} className="flex border-b border-slate-400 p-4 gap-3">
            <Link href={`/@${author.username}`}>
                <Image
                    src={author.profileImageUrl}
                    className="rounded-full w-14 h-14"
                    alt={`@${author.username}'s profile picture`}
                    width={56}
                    height={56}
                />
            </Link>
            <div className="flex flex-col">
                <div className="flex gap-1 text-slate-300">
                    <Link href={`/@${author.username}`}>
                        <span>{`@${author.username} `}</span>
                    </Link>
                    <Link href={`/post/${post.id}`}>
                        <span className="font-thin">{` · ${dayjs(post.createdAt).fromNow()}`}</span>
                    </Link>
                </div>
                <span className="text-2xl">{post.content}</span>
            </div>
        </div>
    )
}
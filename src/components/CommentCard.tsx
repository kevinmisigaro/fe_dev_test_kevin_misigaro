import { IComment } from "@/utils/interfaces"

function CommentCard({comment}:{comment: IComment}) {
  return (
    <div className="flex flex-row justify-start items-center gap-x-4">
        <p className="text-xl">{comment.text}</p>
    </div>
  )
}

export default CommentCard
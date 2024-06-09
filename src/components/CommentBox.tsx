function CommentBox({
str,
  updateFn,
  submitBtn,
}: {
    str: string
  updateFn: (e: any) => void;
  submitBtn: () => void;
}) {
  return (
    <div className="mt-3 flex flex-col gap-y-4 mb-6">
      <textarea
        className="textarea textarea-primary w-[50rem]"
        placeholder="Enter comment"
        onChange={updateFn}
        value={str}
      />

      <button
        onClick={submitBtn}
        className="px-10 py-2 rounded-md max-w-fit bg-blue-500 text-white"
      >
        Comment
      </button>
    </div>
  );
}

export default CommentBox;

interface Props {
  kind: string;
}

// this is a little floating label that displays the "kind" of result
export default function ResultKindLabel({ kind }: Props) {
  return (
    <div className="px-2 py-[2px] absolute top-3 right-5 bg-main rounded-lg shadow-[0_0_3px_white]">
      {kind}
    </div>
  );
}

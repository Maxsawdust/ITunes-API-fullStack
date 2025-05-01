interface Props {
  kind: string;
}

export default function ResultKindLabel({ kind }: Props) {
  return (
    <div className="px-2 py-[2px] absolute top-5 right-5 bg-main rounded-lg shadow-[0_0_3px_white]">
      {kind}
    </div>
  );
}

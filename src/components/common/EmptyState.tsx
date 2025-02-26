interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex min-h-[20rem] items-center justify-center">
      <span className="text-xl text-neutral-200">{message}</span>
    </div>
  );
}

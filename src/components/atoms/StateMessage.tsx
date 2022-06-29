export const StateMessage = ({ message }: { message: string }) => {
  return (
    <div className="min-h-stateMessage grid place-content-center">
      <p className="text-2xl">{message}</p>
    </div>
  );
};

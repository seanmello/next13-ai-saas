import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/smalltalk2.gif"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        CONVERSATION IS LOADING...
      </p>
    </div>
  );
};

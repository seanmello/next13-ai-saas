import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="https://media.discordapp.net/attachments/1062513593284829366/1156737582936375347/smalltalk2.gif?ex=65160f52&is=6514bdd2&hm=75cc5a077cee85739d182d6a6166e65b0ded3df93038dbd2bea032a89b927d58&=&width=584&height=584"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Conversation Loading...
      </p>
    </div>
  );
};

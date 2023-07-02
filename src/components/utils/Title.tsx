function Title({ children }: { children: string }) {
  return (
    <h1 className="title text-center text-5xl sm:text-4xl xxs:text-4xl xxxs:text-3xl dark:text-white mb-10 md:mb-10 underline underline-offset-8 decoration-8 decoration-cyan-500 font-bold">
      {children}
    </h1>
  );
}

export default Title;

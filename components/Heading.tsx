type HeadingProps = {
  title: string;
};

export const Heading = ({ title }: HeadingProps) => (
  <h2 className="mb-3 uppercase font-bold tracking-widest text-sm2 text-purple-700 ">
    {title}
  </h2>
);

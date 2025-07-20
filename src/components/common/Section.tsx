import { memo } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
  title: string;
};

function Section({ id, title, children, className }: Props): JSX.Element {
  return (
    <section className={`py-8 sm:py-8 ${className}`} id={id}>
      <div className="container mx-auto max-w-full overflow-hidden px-4 sm:px-4">
        <h3 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">{title}</h3>
        {children}
      </div>
    </section>
  );
}

export default memo(Section);

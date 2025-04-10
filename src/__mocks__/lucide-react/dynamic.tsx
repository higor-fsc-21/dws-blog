export type IconName = string;

export const DynamicIcon = ({
  name,
  size,
  className,
}: {
  name: IconName;
  size: number;
  className?: string;
}) => {
  return (
    <svg
      data-testid={`icon-${name}`}
      className={className}
      width={size}
      height={size}
    />
  );
};

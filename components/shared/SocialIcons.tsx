import { socialLinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";

const SocialIcons = ({
  text = "Follow us",
  containerClassName,
  iconsClassName,
  linkClassName,
  textClassName,
}: Props) => {
  return (
    <div className={cn("flex items-center gap-3", containerClassName)}>
      <p className={cn("text-xs text-primary", textClassName)}>{text}</p>
      {socialLinks.map(({ Icon, href, id }) => (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          key={id}
          className={cn("text-2xl group", linkClassName)}
        >
          <Icon
            className={cn(
              "fill-white group-hover:fill-primary",
              iconsClassName
            )}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

type Props = {
  text?: string;
  containerClassName?: string;
  textClassName?: string;
  linkClassName?: string;
  iconsClassName?: string;
};

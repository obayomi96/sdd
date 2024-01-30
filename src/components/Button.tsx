import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "large" | "small" | "medium" | "extra-large";
  label?: string;
  onClick?: (arg: any) => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  loading?: boolean;
  disabled?: boolean;
  textColor?: string;
  capitalized?: boolean;
  additionalClassname?: any;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  iconSpace?: number;
  noRounded?: boolean;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onClick = () => {},
  type = "button",
  icon,
  width,
  height,
  loading = false,
  disabled = false,
  textColor,
  capitalized,
  additionalClassname,
  size = "large",
  iconPosition = "left",
  iconSpace = 16,
  noRounded,
  backgroundColor,
}) => {
  const computedStyle = () => {
    const style: {
      width?: string;
      height?: string;
      color?: string;
      backgroundColor?: string;
    } = {};

    if (width) {
      style.width = `${width}`;
    }

    if (height) {
      style.height = `${height}`;
    }

    if (textColor) {
      style.color = textColor;
    }

    if (backgroundColor) {
      style.backgroundColor = backgroundColor;
    }

    return style;
  };

  return (
    <button
      className={clsx({
        "flex items-center text-sm justify-center rounded-[20px] font-[500] w-full shadow-gray-500 shadow-sm ease-in-out duration-500":
          true,
        "rounded-[8px]": noRounded === true,
        "bg-[#57BE6C] text-[#fff]": variant === "primary",
        "bg-[#fdfdfd]": variant && ["secondary"].includes(variant),
        "text-[#57BE6C] border-[1px] border-solid border-[#57BE6C] bg-transparent":
          variant === "secondary",
        "opacity-50": disabled,
        "!w-[260px] h-[40px]": size === "large",
        "!w-[130px] h-[40px]": size === "medium",
        "!w-[90px] h-[32px]": size === "small",
        "w-full h-[60px]": size === "extra-large",
        capitalize: capitalized,
        [additionalClassname]: additionalClassname,
      })}
      onClick={onClick}
      type={type}
      style={computedStyle()}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <>
          {icon}
          <div className="w-5" />
        </>
      )}
      {!loading ? <p className="">{label}</p> : "Loading..."}
      {icon && iconPosition === "right" && (
        <>
          <div className="w-5" />
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;

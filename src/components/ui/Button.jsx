export default function Button({ children, textOnly, className, ...props }) {
  let buttonStyles = textOnly ? "text-button" : "button";
  className && (buttonStyles += ` ${className}`);

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}

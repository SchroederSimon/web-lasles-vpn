import "./buttonPrimary.css";

interface Theme {
  backgroundclass?: string;
  text: string;
}

function ButtonPrimary({ theme }: { theme: Theme }) {
  return (
    <div className={`button-primary ${theme.backgroundclass}`}>
      <button>
        <span>{theme.text}</span>
      </button>
    </div>
  );
}

export default ButtonPrimary;

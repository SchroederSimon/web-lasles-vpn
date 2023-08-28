import "./buttonPrimary.css";

interface Theme {
  backgroundclass?: string;
  textclass: string;
}

function ButtonPrimary({ theme }: { theme: Theme }) {
  return (
    <div className={`button-primary ${theme.backgroundclass}`}>
      <button>
        <span>{theme.textclass}</span>
      </button>
    </div>
  );
}

export default ButtonPrimary;

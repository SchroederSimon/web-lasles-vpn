import "./buttonPrimary.css";

interface Theme {
  backgroundclass?: string;
  textclass: string;
}

function ButtonPrimary({ theme }: { theme: Theme }) {
  return (
    <div className={`button-primary ${theme.backgroundclass}`}>
      <button>
        <strong>{theme.textclass}</strong>
      </button>
    </div>
  );
}

export default ButtonPrimary;

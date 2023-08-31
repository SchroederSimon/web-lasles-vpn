import "./buttonPrimary.css";

interface ButtonTheme {
  backgroundclass?: string;
  text: string;
}

function ButtonPrimary({ buttonTheme }: { buttonTheme: ButtonTheme }) {
  return (
    <div className={`button-primary ${buttonTheme.backgroundclass}`}>
      <button>
        <span>{buttonTheme.text}</span>
      </button>
    </div>
  );
}

export default ButtonPrimary;
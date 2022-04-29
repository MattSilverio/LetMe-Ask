
type ButtonProps = {
  text?: string;
}

export function ButtonProps(props: ButtonProps) {
  
  
  return(
    <div>
      <button>{props.text || "Default"}</button>
    </div>
  )
}
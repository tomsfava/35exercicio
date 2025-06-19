type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
)

export default Card

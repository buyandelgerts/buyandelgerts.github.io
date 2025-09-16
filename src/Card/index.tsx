interface CardProps {
    component: React.ElementType;
    className?: string;
  }
  
  const Card: React.FC<CardProps> = ({ component: Component, className }) => <Component className={className} />;

  export default Card;
  
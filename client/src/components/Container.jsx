import { cn } from "./ui/cn"


const Container = ({children,className}) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4 py-7")}>{children}</div>
  )
}

export default Container
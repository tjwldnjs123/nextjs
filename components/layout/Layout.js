import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div>{props.children}</div>
    </div>
  );
}

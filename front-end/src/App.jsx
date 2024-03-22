import Login from "./features/auth/Login";
// import Registration from "./features/auth/Registration";

export default function App() {
  return (
    <div className="bg-background-color  h-screen flex flex-col items-center mt-16">
      <Login />
      {/* <Registration /> */}
    </div>
  );
}

import CreateEventSideBar from "../../../component/event/partials/CreateEventSideBar.jsx";

const CreateEventPage = ({children}) => {
  return(
      <div className="flex h-screen">
          <CreateEventSideBar />
          <div className="w-[75vw] overflow-y-auto">{children}</div>
      </div>
  )
}
export default CreateEventPage;
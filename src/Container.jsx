export default function Container(props) {
  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <span>{props.firstName}</span>
      <br></br><span>{props.jobTitle}</span>
      <br></br><span>{props.department}</span>
      <br></br><span>{props.companyName}</span>
      <br></br><span>{props.email}</span>
    </div>

  );
}

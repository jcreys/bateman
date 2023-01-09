export default function Container(props) {
    return         <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
{props.firstName}
{props.lastName}
{props.jobTitle}
{props.department}
{props.companyName}
{props.email}
</div>
  }


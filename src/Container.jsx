export default function Container(props) {
  console.log(props.jobTitle);
  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <table cellPadding={0} cellSpacing={0} className={"signature"}>
        <tbody>
          <tr>
            <td rowSpan={5}>
              <img className={"main-image"} src="/assets/pngegg.png" alt={""} />
            </td>
            <td rowSpan={5}>
              <div className={"vertical-line"} />
            </td>
            <td>{`${props.firstName} ${props.lastName}`}</td>
          </tr>
          <tr>
            <td colSpan={3}>{props.jobTitle}</td>
          </tr>
          <tr>
            <td colSpan={3}>Email: {props.email}</td>
          </tr>
          <tr>
            <td colSpan={3}>Company: {props.companyName}</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div className={"social-logos-frame"}>
                <a href={"https://twitter.com/"}>
                  <img src="/assets/twitter.png" alt={""} />
                </a>
                <a href={"https://www.linkedin.com/"}>
                  <img src="/assets/linkedin.png" alt={""} />
                </a>
                <a href={"https://www.facebook.com/"}>
                  <img src="/assets/facebook.png" alt={""} />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function Container2(props) {
  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n          table {\n            border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;\n          }\n          a, a:link, a:visited { text-decoration: underline; color: #434343; } \n          a:hover { text-decoration: underline; }\n          h2,h2 a,h2 a:visited,h3,h3 a,h3 a:visited,h4,h5,h6,.t_cht { color:#000 !important; }\n          .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {\n            font-family: Tahoma, Arial, Helvetica, sans-serif;\n            font-size: 12px;\n            mso-line-height-rule: exactly;\n            line-height: 100%;\n          }\n          .ExternalClass { width: 100%; }\n          <!--[if (mso)|(mso 16)|(IE)]>\n            <style type="text/css">\n              .button-link a, .button-link a:link, button-link a:visited, button-link a:hover { \n                text-decoration: none !important;\n              }            \n            ',
        }}
      />
      <table
        cellPadding={0}
        cellSpacing={0}
        border={0}
        style={{
          fontFamily: "Tahoma, Arial, sans-serif",
          fontSize: "9pt",
          width: "400px",
          borderCollapse: "collapse",
          msoTableLspace: 0,
          msoTableRspace: 0,
        }}
      >
        <tbody>
          <tr>
            <td
              width={120}
              style={{
                width: "120px",
                paddingRight: "10px",
                verticalAlign: "top",
              }}
              valign="top"
            >
              <table cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr>
                    <td style={{ lineHeight: "0px", paddingBottom: "4px" }}>
                      <img
                        border={0}
                        style={{ border: 0, width: "120px", height: "120px" }}
                        width={120}
                        height={120}
                        src="https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg"
                      />
                      <br />
                    </td>
                  </tr>
                  <tr style={{ background: "#0077b5", color: "white" }}>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      <a
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        href="https://www.linkedin.com/in/jogvangunnarsson/"
                      >
                        <img
                          src="https://i.postimg.cc/pTQkkC0R/linkedin.png"
                          style={{ width: "75px" }}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td
              width={460}
              style={{
                width: "460px",
                paddingLeft: "10px",
                verticalAlign: "top",
                msoLineHeightRule: "exactly",
                lineHeight: "22px",
                borderLeft: "3px solid #434343",
              }}
              valign="top"
            >
              <span>
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  <span>{`${props.firstName} ${props.lastName}`}</span>
                </span>
                <br />
              </span>
              <span>
                <span style={{ fontSize: "14px" }}>{props.jobTitle} - {props.companyName}</span>
                <br />
              </span>
              <span>
                <span style={{ fontWeight: "bold" }}>T:</span>{" "}
                <span>{props.phoneNumber}</span>
                <span />
              </span>
              <span>
                <span>&nbsp;</span>
                <span style={{ fontWeight: "bold" }}>E:</span>{" "}
                <a
                  style={{ textDecoration: "underline", color: "#434343" }}
                  href="mailto:jg@optimalnorge.no"
                >
                  <span>{props.email}</span>
                </a>
                <br />
              </span>
              {/* <a
                href="https://www.optimalnorge.no"
                style={{
                  fontSize: "14px",
                  textDecoration: "underline",
                  color: "#434343",
                }}
              >
                Optimal Norge AS
              </a>
              <br /> */}
              <span style={{ fontWeight: "bold" }}>A:</span>{" "}
              <a
                href="https://www.google.com/maps/place/Ryensvingen+3,+0680+Oslo,+Norway/@59.8935279,10.8026382,17z/data=!4m5!3m4!1s0x46416f1afb26aaf7:0xf8f233c718e58c71!8m2!3d59.8935279!4d10.8048269"
                style={{ textDecoration: "underline", color: "#434343" }}
              >
               {props.address}
              </a>
              <br />
              <table
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{
                  borderCollapse: "collapse",
                  msoTableLspace: 0,
                  msoTableRspace: 0,
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ paddingTop: "3px" }}>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "9pt",
                          msoLineHeightRule: "exactly",
                          lineHeight: "19px",
                          borderSpacing: 0,
                          borderCollapse: "collapse",
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                        }}
                      >
                        <tbody>
                          <tr
                            style={{
                              background: "#3e0669",
                              color: "#ffffff",
                              borderTop: "10px solid #ffffff",
                            }}
                          >
                            <td
                              style={{ fontWeight: "bold", padding: "5px" }}
                              className="button-link"
                            >
                              <a
                                style={{
                                  color: "white",
                                  textDecoration: "none !important",
                                  display: "inline-block",
                                }}
                                href="http://www.google.com"
                              >
                                <span>Book me for a no obligation chat</span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              width={600}
              style={{
                color: "silver",
                width: "600px",
                fontSize: "9px",
                paddingTop: "10px",
                textAlign: "justify",
              }}
            >
              The information transmitted, including any attachment, may contain
              confidential and/or privileged material and is intended only for
              the addressee. The contents of the message are the individual
              sender's responsibility if it is not related to the operation of
              Optimal Norge AS organization no: 994 824 066. If you receive this
              in error, please keep the information confidential, contact the
              sender and delete the material from your system.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

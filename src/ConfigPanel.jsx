import React from "react";
// import Container3 from './Container3'
export default function ConfigPanel(props) {
  return (
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 flex h-screen justify-center items-center ">
        <table
          cellPadding={0}
          cellSpacing={0}
          className="table__StyledTable-sc-1avdl6r-0 iasblw"
          style={{
            verticalAlign: "-webkit-baseline-middle",
            fontSize: "small",
            fontFamily: "Arial",
          }}
        >
          <tbody>
            <tr>
              <td>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                  style={{
                    verticalAlign: "-webkit-baseline-middle",
                    fontSize: "small",
                    fontFamily: "Arial",
                  }}
                >
                  <tbody>
                    <tr>
                      <td width={150} style={{ verticalAlign: "middle" }}>
                        <span
                          className="template3__ImageContainer-sc-vj949k-0 iAZHDN"
                          style={{ marginRight: "20px", display: "block" }}
                        >
                          <img
                            src="https://media.licdn.com/dms/image/C4D03AQHHZ5wWQ_5STg/profile-displayphoto-shrink_200_200/0/1639623814731?e=1678320000&v=beta&t=It8OxAu8_QM0TWfLWrYZm1kBq4QFT6uxKhQLG_BZr-w"
                            role="presentation"
                            width={130}
                            className="image__StyledImage-sc-hupvqm-0 eLouvR"
                            style={{ maxWidth: "130px" }}
                          />
                        </span>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <h2
                          color="#000000"
                          className="name__NameContainer-sc-1m457h3-0 jCjfGD"
                          style={{
                            margin: "0px",
                            fontSize: "16px",
                            color: "rgb(0, 0, 0)",
                            fontWeight: 600,
                          }}
                        >
                          <span>{props.firstName}</span>
                          <span>&nbsp;</span>
                          <span>{props.lastName}</span>
                        </h2>
                        <p
                          color="#000000"
                          fontSize="small"
                          className="job-title__Container-sc-1hmtp73-0 ibpiyI"
                          style={{
                            margin: "0px",
                            color: "rgb(0, 0, 0)",
                            fontSize: "12px",
                            lineHeight: "20px",
                          }}
                        >
                          <span>{props.jobTitle}</span>
                        </p>
                        <p
                          color="#000000"
                          fontSize="small"
                          className="company-details__CompanyContainer-sc-j5pyy8-0 haLCeu"
                          style={{
                            margin: "0px",
                            fontWeight: 500,
                            color: "rgb(0, 0, 0)",
                            fontSize: "12px",
                            lineHeight: "20px",
                          }}
                        >
                          <span>{props.department}</span>
                          <span>&nbsp;|&nbsp;</span>
                          <span>{props.companyName}</span>
                        </p>
                      </td>
                      <td width={30}>
                        <div style={{ width: "30px" }} />
                      </td>
                      <td
                        color="#ff0044"
                        direction="vertical"
                        width={1}
                        height="auto"
                        className="color-divider__Divider-sc-1h38qjv-0 dVPycS"
                        style={{
                          width: "1px",
                          borderBottom: "none",
                          borderLeft: "1px solid rgb(255, 0, 68)",
                        }}
                      />
                      <td width={30}>
                        <div style={{ width: "30px" }} />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="table__StyledTable-sc-1avdl6r-0 iasblw"
                          style={{
                            verticalAlign: "-webkit-baseline-middle",
                            fontSize: "small",
                            fontFamily: "Arial",
                          }}
                        >
                          <tbody>
                            <tr height={25} style={{ verticalAlign: "middle" }}>
                              <td
                                width={30}
                                style={{ verticalAlign: "middle" }}
                              >
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                                  style={{
                                    verticalAlign: "-webkit-baseline-middle",
                                    fontSize: "small",
                                    fontFamily: "Arial",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ verticalAlign: "bottom" }}>
                                        <span
                                          color="#ff0044"
                                          width={11}
                                          className="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC"
                                          style={{
                                            display: "inline-block",
                                            backgroundColor: "rgb(255, 0, 68)",
                                          }}
                                        >
                                          <img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                            color="#ff0044"
                                            alt="mobilePhone"
                                            width={13}
                                            className="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte"
                                            style={{
                                              display: "block",
                                              backgroundColor:
                                                "rgb(255, 0, 68)",
                                            }}
                                          />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                style={{
                                  padding: "0px",
                                  color: "rgb(0, 0, 0)",
                                }}
                              >
                                <a
                                  href="tel:416-276-7630"
                                  color="#000000"
                                  className="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg"
                                  style={{
                                    textDecoration: "none",
                                    color: "rgb(0, 0, 0)",
                                    fontSize: "12px",
                                  }}
                                >
                                  <span>{props.phoneNumber}</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{ verticalAlign: "middle" }}>
                              <td
                                width={30}
                                style={{ verticalAlign: "middle" }}
                              >
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                                  style={{
                                    verticalAlign: "-webkit-baseline-middle",
                                    fontSize: "small",
                                    fontFamily: "Arial",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ verticalAlign: "bottom" }}>
                                        <span
                                          color="#ff0044"
                                          width={11}
                                          className="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC"
                                          style={{
                                            display: "inline-block",
                                            backgroundColor: "rgb(255, 0, 68)",
                                          }}
                                        >
                                          <img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                            color="#ff0044"
                                            alt="emailAddress"
                                            width={13}
                                            className="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte"
                                            style={{
                                              display: "block",
                                              backgroundColor:
                                                "rgb(255, 0, 68)",
                                            }}
                                          />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{ padding: "0px" }}>
                                <a
                                  href=""
                                  color="#000000"
                                  className="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg"
                                  style={{
                                    textDecoration: "none",
                                    color: "rgb(0, 0, 0)",
                                    fontSize: "12px",
                                  }}
                                >
                                  <span>{props.email}</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{ verticalAlign: "middle" }}>
                              <td
                                width={30}
                                style={{ verticalAlign: "middle" }}
                              >
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                                  style={{
                                    verticalAlign: "-webkit-baseline-middle",
                                    fontSize: "small",
                                    fontFamily: "Arial",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ verticalAlign: "bottom" }}>
                                        <span
                                          color="#ff0044"
                                          width={11}
                                          className="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC"
                                          style={{
                                            display: "inline-block",
                                            backgroundColor: "rgb(255, 0, 68)",
                                          }}
                                        >
                                          <img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                            color="#ff0044"
                                            alt="website"
                                            width={13}
                                            className="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte"
                                            style={{
                                              display: "block",
                                              backgroundColor:
                                                "rgb(255, 0, 68)",
                                            }}
                                          />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{ padding: "0px" }}>
                                <a
                                  href="//www.thales.com"
                                  color="#000000"
                                  className="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg"
                                  style={{
                                    textDecoration: "none",
                                    color: "rgb(0, 0, 0)",
                                    fontSize: "12px",
                                  }}
                                >
                                  <span>www.thales.com</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{ verticalAlign: "middle" }}>
                              <td
                                width={30}
                                style={{ verticalAlign: "middle" }}
                              >
                                <table
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                                  style={{
                                    verticalAlign: "-webkit-baseline-middle",
                                    fontSize: "small",
                                    fontFamily: "Arial",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ verticalAlign: "bottom" }}>
                                        <span
                                          color="#ff0044"
                                          width={11}
                                          className="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC"
                                          style={{
                                            display: "inline-block",
                                            backgroundColor: "rgb(255, 0, 68)",
                                          }}
                                        >
                                          <img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                            color="#ff0044"
                                            alt="address"
                                            width={13}
                                            className="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte"
                                            style={{
                                              display: "block",
                                              backgroundColor:
                                                "rgb(255, 0, 68)",
                                            }}
                                          />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{ padding: "0px" }}>
                                <span
                                  color="#000000"
                                  className="contact-info__Address-sc-mmkjr6-3 ikFVIq"
                                  style={{
                                    fontSize: "12px",
                                    color: "rgb(0, 0, 0)",
                                  }}
                                >
                                  <span>{props.address}</span>
                                </span>
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
              <td>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                  style={{
                    width: "100%",
                    verticalAlign: "-webkit-baseline-middle",
                    fontSize: "small",
                    fontFamily: "Arial",
                  }}
                >
                  <tbody>
                    <tr>
                      <td height={30} />
                    </tr>
                    <tr>
                      <td
                        color="#ff0044"
                        direction="horizontal"
                        width="auto"
                        height={1}
                        className="color-divider__Divider-sc-1h38qjv-0 dVPycS"
                        style={{
                          width: "100%",
                          borderBottom: "1px solid rgb(255, 0, 68)",
                          borderLeft: "none",
                          display: "block",
                        }}
                      />
                    </tr>
                    <tr>
                      <td height={30} />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  className="table__StyledTable-sc-1avdl6r-0 iasblw"
                  style={{
                    width: "100%",
                    verticalAlign: "-webkit-baseline-middle",
                    fontSize: "small",
                    fontFamily: "Arial",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "top" }} />
                      <td style={{ textAlign: "right", verticalAlign: "top" }}>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="table__StyledTable-sc-1avdl6r-0 iasblw"
                          style={{
                            display: "inline-block",
                            verticalAlign: "-webkit-baseline-middle",
                            fontSize: "small",
                            fontFamily: "Arial",
                          }}
                        >
                          <tbody>
                            <tr style={{ textAlign: "right" }}>
                              <td>
                                <a
                                  href="//sdfsd"
                                  color="#2b8ae2"
                                  className="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ"
                                  style={{
                                    display: "inline-block",
                                    padding: "0px",
                                    backgroundColor: "rgb(43, 138, 226)",
                                  }}
                                >
                                  <img
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                    alt="facebook"
                                    color="#2b8ae2"
                                    height={24}
                                    className="social-links__LinkImage-sc-py8uhj-1 cKHJaU"
                                    style={{
                                      backgroundColor: "rgb(43, 138, 226)",
                                      maxWidth: "135px",
                                      display: "block",
                                    }}
                                  />
                                </a>
                              </td>
                              <td width={5}>
                                <div />
                              </td>
                              <td>
                                <a
                                  href=""
                                  color="#2b8ae2"
                                  className="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ"
                                  style={{
                                    display: "inline-block",
                                    padding: "0px",
                                    backgroundColor: "rgb(43, 138, 226)",
                                  }}
                                >
                                  <img
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                    alt="linkedin"
                                    color="#2b8ae2"
                                    height={24}
                                    className="social-links__LinkImage-sc-py8uhj-1 cKHJaU"
                                    style={{
                                      backgroundColor: "rgb(43, 138, 226)",
                                      maxWidth: "135px",
                                      display: "block",
                                    }}
                                  />
                                </a>
                              </td>
                              <td width={5}>
                                <div />
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
              <td height={30} />
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <a
                  href="https://www.hubspot.com/email-signature-generator?utm_source=create-signature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viral-link__Anchor-sc-1kv0kjx-0 ZsxMI"
                  style={{
                    fontSize: "12px",
                    display: "block",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  Create Your Own Free Signature
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

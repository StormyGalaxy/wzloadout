import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab, Badge, Table } from "react-bootstrap";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { getBO3Attachments } from "@/helpers/generator/black-ops/three/getBO3Attachments";
import { generateGithubLink } from "@/helpers/_silabs/generateGithubLink";
import { capitalizeFirstLetter } from "@/helpers/_silabs/capitalizeFirstLetter";
//types
import { WeaponInfoProps } from "@/types/Info";
import { Weapon } from "@/types/Generator";

const titleMap = {
  name: "Name",
  type: "Type",
  game: "Game",
  no_attach: "No Attachments",
  no_attach_info: "No Attachment Info",
  isDlc: "DLC Weapon",
};

function WeaponInfo({ value, game }: WeaponInfoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [weaponData, setWeponData] = useState<Weapon>({
    name: "",
    type: "",
    game: "",
  });
  const [attachmentInfo, setAttachmentInfo] = useState({});
  const [key, setKey] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");

  useEffect(() => {
    const dataList = getWeapon(game, value);

    if (dataList && isWeapon(dataList)) {
      setWeponData(dataList);
      const gitGame = capitalizeFirstLetter(dataList.game as string, "-");
      const type = capitalizeFirstLetter(dataList.type as string, "_");
      setGithubLink(generateGithubLink(
        process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
        process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
        {
          title: `[${gitGame}] - Manage Weapon Attachments - [${dataList.name} - ${type}]`,
          labels: "enhancement",
          template: "manage-weapon-attachments-template.md",
        }
      ));

      if (!dataList.no_attach_info && !dataList.no_attach) {
        let attachments = fetchAttachments(dataList, -1);

        if (game === "black-ops-three") {
          attachments = getBO3Attachments(dataList, "all", -1);
        }

        setAttachmentInfo(attachments);
        setKey(Object.keys(attachments)[0]);
      }
    } else {
      console.error("No Weapon found in the dataList object");
    }

    setIsLoading(false);
  }, [value, game]);

  function isWeapon(obj: unknown): obj is Weapon {
    if (typeof obj === "object" && obj !== null) {
      const weaponLike = obj as {
        name?: unknown;
        type?: unknown;
        game?: unknown;
      };
      return (
        typeof weaponLike.name === "string" &&
        typeof weaponLike.type === "string" &&
        typeof weaponLike.game === "string"
      );
    }
    return false;
  }

  return (
    <Container id="weapon-info" className="shadow-lg p-3 bg-body rounded">
      {!isLoading && (
        <>
          <Row className="justify-content-md-center">
            {weaponData &&
              Object.entries(weaponData).map(([key, value]) => (
                <Col sm className="text-center mb-3 mb-md-0" key={key}>
                  <span className="fw-bolder fs-5">{titleMap[key]}:</span>{" "}
                  <br />
                  <span className="text-muted fs-6">
                    {formatValue(String(value))}
                  </span>
                </Col>
              ))}
          </Row>

          <hr className="mt-4" />
          <Row className="justify-content-md-center">
            {attachmentInfo && Array.isArray(attachmentInfo) ? ( // Correct condition for array
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead className="text-center">
                    <tr>
                      <th>Attachments</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {attachmentInfo.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {typeof item === "string" ? item : String(item)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : attachmentInfo &&
              typeof attachmentInfo === "object" &&
              Object.keys(attachmentInfo).length > 0 ? ( // Correct condition for object
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "")}
                className="mb-3"
              >
                {Object.entries(attachmentInfo).map(([key, values]) => {
                  const itemCount = Array.isArray(values) ? values.length : 1;

                  return (
                    <Tab
                      eventKey={key}
                      title={
                        <span>
                          {formatValue(key)}{" "}
                          <Badge bg="dark">{itemCount}</Badge>
                        </span>
                      }
                      key={key}
                    >
                      <div className="table-responsive">
                        <Table striped bordered hover size="sm">
                          <thead className="text-center">
                            <tr>
                              <th>Value</th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            {Array.isArray(values) ? (
                              values.map((value, index) => (
                                <tr key={index}>
                                  <td>
                                    {typeof value === "string"
                                      ? value
                                      : String(value)}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td>{String(values)}</td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                      </div>
                    </Tab>
                  );
                })}
              </Tabs>
            ) : weaponData?.no_attach_info ? (
              <>
                <h3 className="text-center">
                  We have no attachment info for this weapon :(
                </h3>
                <h5 className="text-center mt-4">
                  <a href={githubLink} target="_blank">Help us out, suggest attachments</a>
                </h5>
              </>
            ) : (
              <h3 className="text-center">No attachments</h3>
            )}
          </Row>
        </>
      )
      }
    </Container >
  );
}

function formatValue(label) {
  return label
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default WeaponInfo;

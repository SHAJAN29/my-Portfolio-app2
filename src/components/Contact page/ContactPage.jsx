import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavColor, UserContext } from "../../App";
import "./ContactPage.css";

const ContactPage = () => {
  const greenClr = useContext(NavColor);

  const [mode] = useContext(UserContext);
  return (
    <div className="ContactPage">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Box sx={{ paddingTop: "5rem", paddingLeft: "1rem" }}>
          <Typography
            sx={{
              color: greenClr,
              paddingLeft: { xs: "0", sm: "10px" },
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Work
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "3rem", sm: "5rem" }, padding: "0" }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              paddingLeft: { xs: "0", sm: "10px" },
              fontSize: { sx: "20px", sm: "25px" },
              fontWeight: "300",
              width: { xs: "100%", md: "700px" },
            }}
          >
            Get in touch with me anytime, through social media, e-mail, or phone
            number.
          </Typography>
        </Box>

        <Box
          sx={{
            borderLeft: `1px solid ${greenClr} `,
            padding: {
              xs: "0 2rem 0rem 1rem",
              sm: "0 10rem 0rem 3rem",
              md: "0 20rem 0rem 5rem",
              lg: "0 20rem 0rem 7rem",
              xl: "0 20rem 0rem 7rem",
            },
            marginBottom: "5rem",
          }}
        >
          <Box
            sx={{
              borderBottom: `1px solid ${greenClr} `,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "300",
              }}
              paddingBottom={6}
            >
              Just a friendly reminder that the information provided here is for
              business purposes only. If you have any questions, feel free to
              chat with me directly on my social media. I appreciate your
              understanding in using this responsibly.
            </Typography>
          </Box>

          {/*------------------- contact media------------------------ */}

          <Box>
            <Typography color={greenClr} sx={{ fontSize: "3rem" }}>
              Contact
            </Typography>
            <Box
              sx={{
                padding: "1rem 0 1rem 0",
              }}
            >
              <table className="tableBox">
                <thead className={mode === "light" ? "thead" : "theadDark"}>
                  <th>Contact</th>
                  <th>Detail</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Address</td>
                    <td>Redhills-Chennai-52</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>
                      {" "}
                      <a className={mode === "light" ? "a" : "dark"} href="">
                        {" "}
                        m.j.sandy2916@gmail.com{" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Typography
              sx={{ fontSize: "15px", fontWeight: "300" }}
              paddingBottom={6}
            >
              If you need any further information, such as my phone number,
              please do not hesitate to send me an email first.
            </Typography>
          </Box>

          {/*------------------- social media------------------------ */}

          <Box
            sx={{
              paddingBottom: "2rem",
            }}
          >
            <Typography color={greenClr} sx={{ fontSize: "3rem" }}>
              Social Media
            </Typography>

            <Typography
              sx={{ fontSize: "15px", fontWeight: "300" }}
              paddingBottom={5}
              paddingTop={4}
            >
              If you want to find me on social media, just search for @shajan_m.
              That's my username on almost all platforms, so it should be easy
              to find me.
            </Typography>

            <Typography
              sx={{ fontSize: "15px", fontWeight: "300" }}
              paddingBottom={3}
            >
              But if you're short on time, I've included some links to the
              social media platforms I use most frequently below.
            </Typography>

            <Box
              sx={{
                padding: "1rem 0 0rem 0",
              }}
            >
              <table className="tableBox">
                <thead className={mode === "light" ? "thead" : "theadDark"}>
                  <th>Social Media</th>
                  <th>Profile URL</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Linkedin</td>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={mode === "light" ? "a" : "dark"}
                        href="https://www.linkedin.com/in/shajan-m-2705a6162/"
                      >
                        https://www.linkedin.com/in/shajan_m
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={mode === "light" ? "a" : "dark"}
                        href="https://twitter.com/MShajan141294"
                      >
                        {" "}
                        https://twitter.com/MShajan
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>
                      {" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={mode === "light" ? "a" : "dark"}
                        href="https://www.instagram.com/sandysandy67/"
                      >
                        {" "}
                        https://www.instagram.com/sandysandy67/
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactPage;

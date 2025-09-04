import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Admission/Structure.css";
import SectionHeader from "../Home/SectionHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Structure = () => {
  return (
    <>
      <div className="container mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader
            sectionTitle="Our Features"
            sectionHeading="Fee Structure"
            sectionDescription="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
          />
        </motion.div>

        <motion.div
          className="pricing-table p-3 p-md-4 rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-center mb-4 structure-heading">Program</h2>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead>
                <tr className="table-header">
                  <th>Program</th>
                  <th>Age Group</th>
                  <th>Annual Tuition</th>
                  <th>Registration Fee</th>
                  <th>Activity Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nursery</td>
                  <td>2 - 3 Years</td>
                  <td>$1,866</td>
                  <td>$162</td>
                  <td>$12</td>
                </tr>
                <tr>
                  <td>Pre-Kindergarten</td>
                  <td>3 - 4 Years</td>
                  <td>$2,866</td>
                  <td>$220</td>
                  <td>$16</td>
                </tr>
                <tr>
                  <td>Kindergarten</td>
                  <td>4 - 5 Years</td>
                  <td>$3,866</td>
                  <td>$340</td>
                  <td>$20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="additional-services p-3 p-md-4 mt-4 rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-center mb-4 structure-heading">
            Additional Services
          </h2>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <tbody>
                <tr>
                  <td>Before and After-School Care</td>
                  <td>$120 / month</td>
                </tr>
                <tr>
                  <td>Language Immersion Program</td>
                  <td>$50 / semester</td>
                </tr>
                <tr>
                  <td>Transportation (optional)</td>
                  <td>$80 / month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Structure;

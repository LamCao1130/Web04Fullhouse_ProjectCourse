mport "../../style/legal.css";
import { Link } from "react-router";

export function TermsOfServicePage() {
	  return (
		      <div className="legal-page">
		        <div className="legal-container">
		          <div className="legal-header">
		            <Link to="/" className="brand-logo">
		              <div className="brand-logo-icon" style={{ color: "blue" }}>
		                E
		              </div>
		              <div className="brand-logo-text" style={{ color: "blue" }}>
		                <span className="name">EduMind</span>
		                <span className="sub">Learning Platform</span>
		              </div>
		            </Link>
		            <h1>Terms of Service</h1>
		            <p>
		              Terms and conditions for using the EduMind university learning
		              management platform.
		            </p>
		          </div>

		          <div className="legal-card">
		            <section>
		              <h2>1. Introduction</h2>
		              <p>
		                Welcome to EduMind — a university learning management platform
		                designed for assignment management, online examinations, grading,
		                and academic progress tracking.
		              </p>
		            </section>

		            <section>
		              <h2>2. User Accounts</h2>
		              <ul>
		                <li>Use a valid institutional email address.</li>
		                <li>Keep your account credentials secure.</li>
		                <li>
		                  Users are responsible for activities performed under their
		                  accounts.
		                </li>
		                <li>
		                  Unauthorized access attempts may result in account suspension.
		                </li>
		              </ul>
		            </section>

		            <section>
		              <h2>3. Acceptable Use</h2>
		              <ul>
		                <li>Do not attempt to exploit or disrupt the platform.</li>
		                <li>Do not upload harmful or malicious content.</li>
		                <li>Students must comply with academic integrity regulations.</li>
		                <li>
		                  Accessing data without authorization is strictly prohibited.
		                </li>
		              </ul>
		            </section>

		            <section>
		              <h2>4. Academic Integrity</h2>
		              <p>
		                EduMind supports plagiarism detection, grading transparency, and
		                secure assignment submission workflows to promote academic
		                honesty.
		              </p>
		            </section>

		            <section>
		              <h2>5. Platform Availability</h2>
		              <p>
		                Temporary downtime may occur during maintenance, security updates,
		                or unexpected server issues.
		              </p>
		            </section>

		            <section>
		              <h2>6. Contact</h2>
		              <p>Email: support@edumind.edu</p>
		            </section>
		          </div>
		        </div>
		      </div>
		    );
}

export function PrivacyPolicyPage() {
	  return (
		      <div className="legal-page">
		        <div className="legal-container">
		          <div className="legal-header">
		            <Link to="/" className="brand-logo">
		              <div className="brand-logo-icon" style={{ color: "blue" }}>
		                E
		              </div>
		              <div className="brand-logo-text" style={{ color: "blue" }}>
		                <span className="name">EduMind</span>
		                <span className="sub">Learning Platform</span>
		              </div>
		            </Link>
		            <h1>Privacy Policy</h1>
		            <p>
		              Learn how EduMind collects, uses, and protects user information.
		            </p>
		          </div>

		          <div className="legal-card">
		            <section>
		              <h2>1. Information We Collect</h2>
		              <ul>
		                <li>Full name and institutional email</li>
		                <li>Assignment submissions and grades</li>
		                <li>Course and examination records</li>
		                <li>Login sessions and technical logs</li>
		              </ul>
		            </section>

		            <section>
		              <h2>2. How We Use Information</h2>
		              <ul>
		                <li>Provide access to the learning platform</li>
		                <li>Manage assignments and examinations</li>
		                <li>Generate educational analytics</li>
		                <li>Maintain platform security</li>
		              </ul>
		            </section>

		            <section>
		              <h2>3. Data Protection</h2>
		              <p>
		                EduMind uses secure authentication, encrypted communication, and
		                role-based access control to protect academic data.
		              </p>
		            </section>

		            <section>
		              <h2>4. Sharing of Information</h2>
		              <p>
		                Personal information is never sold and is only shared with
		                authorized university departments or trusted infrastructure
		                providers.
		              </p>
		            </section>

		            <section>
		              <h2>5. Cookies and Sessions</h2>
		              <p>
		                Cookies may be used to maintain login sessions and improve user
		                experience.
		              </p>
		            </section>

		            <section>
		              <p>Email: privacy@edumind.edu</p>
		            </section>
		          </div>
		        </div>
		      </div>
		    );
}


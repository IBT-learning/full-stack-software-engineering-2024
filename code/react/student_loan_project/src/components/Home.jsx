export default function Home() {
    return (
        <div className="home">
        <h1>Welcome to the Student Loan Portal</h1>
        <p>
            This portal is designed to help you navigate the financial support available for your education. 
            Whether you're an undergraduate, graduate, or enrolled in a professional course, we offer a variety of student loan options tailored to your needs.
        </p>
        <p>
            Here, you can explore detailed loan policies, understand the types of loans we offer, and use our built-in calculator to estimate your repayment plans. 
            When you're ready, you can apply for a loan directly through this portal, quickly, securely, and confidently.
        </p>
        <p>
            Our goal is to ensure that no student is left behind due to financial challenges.
            Let this platform be your guide to stress-free, transparent, and accessible educational financing.
        </p>
        
        <nav>
            <ul>
            <li><a href="/loan-types">Loan Types</a></li>
            <li><a href="/apply-loan">Apply for a Loan</a></li>
            <li><a href="/loan-policy">Loan Policy</a></li>
           
            </ul>
        </nav>
        </div>
    );
    }
import ProjectCard from './ProjectCard';
import './Projects.css';
import fintrack from '../../assets/preview/fintrack.png';
import what2watch from '../../assets/preview/what2watch.png';
import aifilereader from '../../assets/preview/aifilereader.png';
import betatrade from '../../assets/preview/betatrade.png';
import gcmai from '../../assets/preview/gcmai.png';
import marketnodes from '../../assets/preview/marketnodes.png';

import gitSVG from '../../assets/tool/git.svg';
import vuejsSVG from '../../assets/framework/vuejs.svg';
import firebaseSVG from '../../assets/tool/firebase.svg';
import javascriptSVG from '../../assets/language/javascript.svg';
import htmlSVG from '../../assets/language/html.svg';
import cssSVG from '../../assets/language/css.svg';
import pythonSVG from '../../assets/language/python.svg';
import streamlitSVG from '../../assets/framework/streamlit.svg';
import pandasSVG from '../../assets/library/pandas.svg';
import chartjsSVG from '../../assets/library/chartjs.svg';
import dockerSVG from '../../assets/tool/docker.svg';
import awsSVG from '../../assets/tool/aws.svg';
import djangoSVG from '../../assets/framework/django.svg';
import postgresqlSVG from '../../assets/database/postgresql.svg';
import nodejsSVG from '../../assets/framework/nodejs.svg';
import reactSVG from '../../assets/framework/react.svg';
import mongodbSVG from '../../assets/database/mongodb.svg';
import golangSVG from '../../assets/language/golang.svg';


const projectItems = [
    {
        title: "Market Nodes",
        description: "A distributed backend lab featuring three Go microservices: a high-throughput Kafka/ClickHouse market data ingestor, a concurrency-safe real-time order book engine, and a gRPC-based cross-exchange arbitrage detector.",
        demolink: "https://github.com/hongggweiii/market-nodes",
        techLogos: [golangSVG, dockerSVG, gitSVG],
        image: marketnodes,
    },
    {
        title: "gcm.ai",
        description: "AI driven CLI utility that helps you generate Git commit messages",
        demolink: "https://github.com/hongggweiii/gcm.ai",
        techLogos: [golangSVG, gitSVG],
        image: gcmai,
    },
    {
        title: "what2watch",
        description: "Movie recommendation platform that consolidates content from mulitple streaming sites and provides personalised movie recommendations. With the overload of streaming options, what2watch helps users make informed decisions and discover hidden gems.",
        demolink: "https://what2watch-e748e.web.app/",
        techLogos: [vuejsSVG, javascriptSVG, htmlSVG, cssSVG, firebaseSVG, gitSVG],
        image: what2watch,
    },
    {
        title: "AI CSV/Excel Analyser",
        description: "Allow users to upload CSV/Excel files and interact with an AI to analyze data. Users can prompt the AI for insights, making data exploration simple and efficient. This is created to practise using LLM APIs with pandas",
        demolink: "https://aifilereader.streamlit.app/",
        techLogos: [pythonSVG, streamlitSVG, pandasSVG, gitSVG],
        image: aifilereader,
    },
    {
        title: "Fintrack",
        description: "An expense tracker that helps users manage their finances in one place, simplifying budgeting and financial tracking. It reduces the need for multiple apps, giving users a streamlined way to track and manage their assets and expenses.",
        demolink: "http://54.179.109.136:8000/",
        techLogos: [pythonSVG, djangoSVG, javascriptSVG, htmlSVG, cssSVG, dockerSVG, postgresqlSVG, awsSVG, chartjsSVG, gitSVG],
        image: fintrack,
    },
    {
        title: "BetaTrade",
        description: "A paper trading app which allows users to practice trading and investing in a risk-free environment with real-time market data. Many students fear losing money when learning to invest, thus I wanted to create an app that helps users build confidence in investing without any financial risk.",
        demolink: "https://betatrade.vercel.app/",
        techLogos: [javascriptSVG, nodejsSVG, reactSVG, htmlSVG, cssSVG, mongodbSVG, chartjsSVG, gitSVG],
        image: betatrade,
    },

]

// Iterate over projectsItems and create a ProjectCard
const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 id='projects'>Projects</h2>

            {projectItems.map(proj => (
                <ProjectCard
                    key={proj.title}
                    title={proj.title}
                    description={proj.description}
                    demolink={proj.demolink}
                    techLogos={proj.techLogos}
                    image={proj.image}
                />
            ))}
        </div>
    )
}

export default Projects;

import React from 'react';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import './Home.css';

function Home() {

    // Logic for choosing nice colors for tab bar (supported on iOS and Chrome)
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [
        "#81EBEB",
        "#7A7AE5",
        "#E561C7",
        "#55F255",
        "#E25050",
    ]
    useEffect(() => {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
        
    return (
        <div class="px-2">

            <Helmet>
                <meta name="theme-color" content={colors[colorIndex]} />
            </Helmet>

            <h1 class="text-3xl font-bold my-4">Kalzak | Security Researcher</h1>
            <section>
                <h2 class="text-2xl font-bold my-4">About Me</h2>
                <p class="my-4">
                    Security researcher working at Nethermind.<br/>
                    Securing Ethereum/Starknet protocols.<br/>
                    Background in Computer Science and Cyber Security.<br/>
                    I enjoy low level stuff, especially EVM assempbly.<br/>
                    Gas optimizing and codesize golfing.
                </p>
                <p class="my-4">
                    This is the first version of my site.<br/>
                    As I learn more frontend I'll continue to improve.<br/>
                    It's not gonna be like this forever.
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-bold my-4">Contact info and profiles</h2>
                <p>If you want to reach out, twitter/email will be fastest</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Twitter/x: <a href="https://twitter.com/0xKalzak" class="hover:underline text-blue-600">@0xKalzak</a></li>
                    <li>Github: <a href="https://github.com/Kalzak" class="hover:underline text-blue-600">github.com/Kalzak</a></li>
                    <li>Discord: kalzak</li>
                    <li>Email: kalzak&lt;dot&gt;dev@protonmail&lt;dot&gt;com</li>
                </ul>
            </section>

            <section>
                <h2 class="text-2xl font-bold my-4">Personal projects</h2>
                <p>Cool things I've worked on</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>ERC20 impl written in raw bytecode<br/>(fuzzed by me, formally verified by Nethermind)</li>
                    <li>Extremely small codesize* bytecode fibonacci function</li>
                    <li>Extremely efficient* bytecode fibonacci function <br/>(different algo to above)</li>
                    <li>Solidity gas optimization research (for event/talk)</li>
                    <li>Vanity create2 contract address generator (rust)</li>
                    <li>Repo web3 bytecode extractor <br/>(generic support for foundry/hardhat/truffle)</li>
                    <li>Hex/str/dec/bin converter <br/>(cli tool because rapidtables annoying)</li>
                </ul>
                <p>*Disclaimer: Check out kadenzipfel/evm-golf to try beat me<br/>
                The codesize optimized impl is different to the efficient impl<br/>
                Codesize to beat: 31, Average gas to beat: 759<br/>
                (works on all chains, no push0/chainid)</p>
            </section>


            <section>
                <h2 class="text-2xl font-bold my-4">Experience</h2>
                <p>Lead Security Researcher at Nethermind</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Lead client meetings</li>
                    <li>Find vulns in code (solidity/cairo/bytecode)</li>
                    <li>Worked on smartwallet/derivatives/lendborrow/bridge</li>
                    <li>Technical writing and report process</li>
                </ul>

                <p>Curta.Wtf</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>CTF platform hosting hard challenges</li>
                    <li>Currently 7th on all-time leaderboard</li>
                    <li>Elliptic curve mathematics (ECDSA and ZK Babyjubjub)</li>
                    <li>Heaps of rev-eng to figure out whats going on</li>
                </ul>

                <p>Smart Contract Monitoring at Nethermind</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Study protocols and identify points to monitor</li>
                    <li>Develop and deploy agents to Forta network</li>
                    <li>Follow execution traces to track behavior</li>
                </ul>

                <p>Secureum Epoch 0</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Top 80 participant (out of 1200)</li>
                    <li>Manual code analysis</li>
                    <li>Automated tools</li>
                    <li>Report writing</li>
                </ul>

                <p>ShrineHouse</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>EthGlobal hackathon project</li>
                    <li>Smart contract development</li>
                    <li>Community funded LPs for permissioned loans</li>
                </ul>
            </section>

            <section>
                <h2 class="text-2xl font-bold my-4">Misc stuff</h2>
                <p>Things I know</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Langs: Solidity/Huff/Rust/Typescript/Bash/C/Python/Cairo</li>
                    <li>Frameworks: Foundry/Hardhat/Truffle</li>
                    <li>Tools: Seth/Cast/Heimdall</li>
                </ul>

                <p>Conferences/Talks/Events</p>
                <ul class="list-disc mx-5 mt-2 mb-4">
                    <li>Defi Security Summit 2022 (conference, digital attend)</li>
                    <li>Risks in smart contracts (talk, digital attend)</li>
                    <li>EthCC Paris 2023 (conferenece, physical attend)</li>
                    <li>Defi Security Summit 2023 (conference, physical attend)</li>
                    <li>Paradigm CTF 2023 (curta team, placed top 10)</li>
                    <li>The Gas Optimization Iceberg (talk, physical attend)</li>
                    <li>DevConnect Istanbul 2023 (event, physical attend)</li>
                </ul>
                
            </section>


            <footer>
                <p>Frontend design is my passion!<br/>
                (!&copy;) 2023 Kalzak's site. No rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
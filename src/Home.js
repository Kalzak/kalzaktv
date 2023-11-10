import React from 'react';

function Home() {
    return (
        <div>
            <section>
                <h2>About Me</h2>
                <p>Security researcher working at Nethermind on securing Ethereum/Starknet protocols.<br/>
                Background in Computer Science and Cyber Security.<br/>
                I enjoy low level stuff, using raw bytecode to optimize/golf for gas cost and sometimes codesize too. </p>
                <p>This is the first version of my site, as I continue to learn more frontend I'll start to iterate and improve.<br/>
                It's not gonna be like this forever.</p>
            </section>

            <section>
                <h2>Contact info and profiles</h2>
                <p>If you want to reach out I'm more likely to respond on twitter/discord.</p>
                <ul>
                    <li>Twitter/x: <a href="https://twitter.com/0xKalzak">@0xKalzak</a></li>
                    <li>Github: <a href="https://github.com/Kalzak">github.com/Kalzak</a></li>
                    <li>Discord: kalzak</li>
                    <li>Email: kalzak&lt;dot&gt;dev@protonmail&lt;dot&gt;com</li>
                </ul>
            </section>

            <section>
                <h2>Personal projects</h2>
                <p>Cool things I've worked on</p>
                <ul>
                    <li>ERC20 impl written in raw bytecode (fuzzed by me, formally verified by Nethermind)</li>
                    <li>Extremely small codesize* raw bytecode fibonacci function</li>
                    <li>Extremely efficient* raw bytecode fibonacci function (different algo to above)</li>
                    <li>Solidity gas optimization research (for an upcoming talk)</li>
                    <li>Vanity create2 contract address generator (written in rust)</li>
                    <li>Repo web3 bytecode extractor (generic support for foundry/hardhat/truffle)</li>
                    <li>Hex/str/dec/bin converter (cli tool because rapidtables annoying)</li>
                </ul>
                <p>*Disclaimer: Check out kadenzipfel/evm-golf to try beat me<br/>
                The codesize optimized impl is different to the gas optimized impl<br/>
                Codesize to beat: 31, Average gas to beat: 759 (works on all chains, no push0/chainid)</p>
            </section>


            <section>
                <h2>Experience</h2>
                <p>Lead Security Researcher at Nethermind</p>
                <ul>
                    <li>Lead client meetings</li>
                    <li>Find vulns in code (solidity/cairo/bytecode)</li>
                    <li>Worked on smartwallet/derivatives/lendborrow/bridge</li>
                    <li>Technical writing and report process</li>
                </ul>

                <p>Curta.Wtf</p>
                <ul>
                    <li>CTF platform hosting hard challenges</li>
                    <li>Currently 9th on all-time leaderboard</li>
                    <li>Elliptic curve mathematics (ECDSA and ZK Babyjubjub)</li>
                    <li>Heaps of rev-eng to figure out whats going on</li>
                </ul>

                <p>Smart Contract Monitoring at Nethermind</p>
                <ul>
                    <li>Study protocols and identify points to monitor</li>
                    <li>Develop and deploy agents to Forta network</li>
                    <li>Follow execution traces to track behavior</li>
                </ul>

                <p>Secureum Epoch 0</p>
                <ul>
                    <li>Top 80 participant (out of 1200)</li>
                    <li>Manual code analysis</li>
                    <li>Automated tools</li>
                    <li>Report writing</li>
                </ul>

                <p>ShrineHouse</p>
                <ul>
                    <li>EthGlobal hackathon project</li>
                    <li>Smart contract development</li>
                    <li>Community funded LPs for permissioned loans</li>
                </ul>
            </section>

            <section>
                <h2>Misc stuff</h2>
                <p>Things I know</p>
                <ul>
                    <li>Langs: Solidity/Huff/Rust/Typescript/Bash/C/Python/Cairo</li>
                    <li>Frameworks: Foundry/Hardhat/Truffle</li>
                    <li>Tools: Seth/Cast/Heimdall</li>
                </ul>

                <p>Conferences/Talks</p>
                <ul>
                    <li>Defi Security Summit 2022 (conference, digital attend)</li>
                    <li>Risks in smart contracts (talk, digital attend)</li>
                    <li>Defi Security Summit 2023 (conference, physical attend)</li>
                    <li>The Gas Optimization Iceberg (upcoming talk, physical attend)</li>
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
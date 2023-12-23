import React, { useEffect, useState } from 'react'
import VoteWithKeychainButton from '../VoteWithKeychainButton'
// import DBuzzProposalBanner from '../../assets/dbuzz-proposal.png'
import DoneIcon from '../../assets/done-icon.svg'
import VoteWithHiveSignerButton from '../VoteWithHiveSignerButton'
import party from "party-js"

const VoteFormWrapper = () => {

	const [username, setUsername] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [isProposalVoted, setIsProposalVoted] = useState(false)

	useEffect(() => {
		if(errorMessage) {
			setTimeout(() => {
				setErrorMessage('')
			}, 5000)
		}
	}, [errorMessage])

	useEffect(() => {
		const doneIcon = document.getElementById('done-icon')
		if(doneIcon) {
			party.confetti(doneIcon)
		}
	}, [isProposalVoted])

	const handleRedirectToProposal = () => {
		return window.location = 'https://peakd.com/proposals/294'
	}

	return (
		<div className='max-h-[950px] md:w-[80%] lg:w-[80%] max-w-[1000px] md:rounded-2xl lg:rounded-2xl md:shadow-md lg:shadow-md overflow-hidden'>
			<div className='w-[100%] h-fit'>
				<img className='pointer-events-none object-cover' src={'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/dbuzz/AKWuT7VM2E3wBdooH237UspMNqJd5CBMBjvrjLDquiy5MhRck4AXFMdkn4dnocL.jpg'} alt="dbuzz banner" />
			</div>
			{
				!isProposalVoted
				?
				<div className='mt-12 mb-12 w-full flex flex-col items-center'>
					<span className='mb-4 text-2xl uppercase font-medium'>Vote for the proposal</span>
					<input className='font-medium text-lg mb-4 p-2 w-[300px] border-2 border-gray-400 focus:border-gray-950 outline-none rounded-lg transition-colors' type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
					<VoteWithKeychainButton styles='h-[70px]' username={username} setErrorMessage={setErrorMessage} setIsProposalVoted={setIsProposalVoted}/>
					<VoteWithHiveSignerButton styles='h-[70px]'/>
					{
						errorMessage
						&&
						<div className='mt-4 mb-4 animate-scale'>
							<span className='rounded-lg p-2 pl-4 pr-4 text-lg text-white font-medium bg-[#E61C34]'>{errorMessage}</span>
						</div>
					}
					<span className='mt-4 mb-4 h-[1px] w-[300px] md:w-[350px] lg:w-[350px] bg-slate-400'/>
					<button className='mb-4 pl-2 pr-2 pt-[5px] pb-[5px] bg-gray-700 rounded-lg text-white text-lg hover:bg-opacity-80' onClick={handleRedirectToProposal}>View Proposal</button>
				</div>
				:
				<div className='w-full h-[350px] flex flex-col justify-center items-center'>
					<img className='h-[80px] animate-scale pointer-events-none select-none' id='done-icon' src={DoneIcon} alt="done icon" />
					<span className='mt-4 text-2xl font-bold'>Voted for proposal successfully!</span>
				</div>
			}
		</div>
	)
}

export default VoteFormWrapper
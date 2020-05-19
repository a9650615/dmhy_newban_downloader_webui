import React, { useState } from 'react'
import { createContainer } from 'unstated-next'
import axios from 'axios'

function useTask() {
	const [task, setTask] = useState({
		downloadList: [],
	})

	const getdownloadList = async () => {
		const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/TaskDB.json`)
		if (data) {
			setTask({
				downloadList: data.downloadList,
			})
		}
	}

	return {
		downloadList: task.downloadList,
		getdownloadList,
	}
}

export default createContainer(useTask)

import React, { useState } from 'react'
import { createContainer } from 'unstated-next'
import axios from 'axios'
import _ from 'lodash'

function useTask() {
	const [task, setTask] = useState({
		downloadList: [],
	})

	const getdownloadList = async () => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/TaskDB.json`)
			if (data) {
				setTask({
					downloadList: data.downloadList,
				})
			}
		} catch (e) {}
	}

	const updateDownloadItemByValue = (link, newData) => {
		const newArr = task.downloadList.slice(0)
		const index = _.findIndex(newArr, { link })

		newArr[index] = {
			...newArr[index],
			...newData,
		}

		setTask({
			downloadList: newArr,
		})
	}

	return {
		downloadList: task.downloadList,
		getdownloadList,
		updateDownloadItemByValue,
	}
}

export default createContainer(useTask)

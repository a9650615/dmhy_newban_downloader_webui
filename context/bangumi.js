import React, { useState } from 'react'
import { createContainer } from 'unstated-next'
import axios from 'axios'
import _ from 'lodash'

function useBangumi() {
	const [bangumi, setBangumi] = useState({
		list: [],
	})

	const getBangumiList = async () => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/NewBanDB.json`)
			if (data) {
				console.log(data)
				setBangumi({
					list: data.newBanList
				})
			}
		} catch (e) {}
	}


	return {
		list: bangumi.list,
		getBangumiList,
	}
}

export default createContainer(useBangumi)

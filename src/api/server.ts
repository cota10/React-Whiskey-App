let token = '470dbbd90723a1237b19f5cf7cae5c897aa35c1159ec2d7e'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://cuboid-silicon-sing.glitch.me/api/whiskeys`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://cuboid-silicon-sing.glitch.me/api/whiskeys`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://cuboid-silicon-sing.glitch.me/api/whiskeys/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },

        delete: async(id:string) => {
            const response = await fetch(`https://cuboid-silicon-sing.glitch.me/api/whiskeys/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }
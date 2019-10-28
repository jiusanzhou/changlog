
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export const toNow = (str) => {
    return formatDistance(new Date(str), new Date(), { locale: zhCN })
}
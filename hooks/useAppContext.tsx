import { useContext } from 'react';
import { AppContext } from 'context/AppContext';

/**
 * hook helper to call context
 * @params medium - useMatchMedia()
 * @params large - useMatchMedia()
 * @params theme -
 * @params setTheme()
 * @remarks
 * Example of usage :
 * ```ts
 * const {theme} = useAppContext()
 * ```
 */
const useAppContext = () => useContext(AppContext);

export default useAppContext;

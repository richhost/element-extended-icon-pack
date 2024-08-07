export default ({ componentName, iconNode, base64 }) => {
  return `
/**
 * @preview ![img](${base64})
 */

import Icon from '../Icon'
import type { IconProps, IconNode } from '../Icon'

const iconNode: IconNode = ${iconNode}

const ${componentName} = (props: IconProps) => (
  <Icon {...props} iconNode={iconNode} />
)

export default ${componentName};
  `;
};

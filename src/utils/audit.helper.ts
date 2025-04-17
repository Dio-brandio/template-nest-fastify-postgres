import { IAuditFields } from '@dtos';
import { FastifyRequest } from 'fastify';

function setAuditParams(req: FastifyRequest, auditFields: IAuditFields) {
  req.audit = {
    ...req.audit,
    ...auditFields,
  };
}

function getAuditMessage(audit: IAuditFields) {
  const { oldValues, newValues } = audit;
  return generateAuditHtml(oldValues, newValues);
}

function generateAuditHtml(
  oldValues: Record<string, any>,
  newValues: Record<string, any>,
): string {
  const changes: string[] = [];

  for (const key in newValues) {
    const newValue = newValues[key];
    const oldValue = oldValues?.[key];

    const formatValue = (value: any): string => {
      if (Array.isArray(value)) {
        return `<b>${value.join(', ')}</b>`;
      } else if (typeof value === 'object' && value !== null) {
        return `<pre>${JSON.stringify(value, null, 2)}</pre>`;
      } else {
        return `<b>${value}</b>`;
      }
    };

    const formatSimpleValue = (value: any): string => {
      if (Array.isArray(value)) {
        return `<b>${value.join(', ')}</b>`;
      } else if (typeof value === 'object' && value !== null) {
        return `<pre>${JSON.stringify(value, null, 2)}</pre>`;
      } else {
        return `<b>${value}</b>`;
      }
    };

    const isEqual = (a: any, b: any): boolean => {
      return JSON.stringify(a) === JSON.stringify(b);
    };

    if (oldValue === undefined) {
      changes.push(`Created <b>${key}</b> with value ${formatValue(newValue)}`);
    } else if (!isEqual(oldValue, newValue)) {
      changes.push(
        `Updated <b>${key}</b> from ${formatSimpleValue(oldValue)} to ${formatSimpleValue(newValue)}`,
      );
    }
  }
  return changes.join('<br>');
}

export { setAuditParams, getAuditMessage };

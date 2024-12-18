import { useCallback } from 'react';
import { COLORS } from '../utils/colors';

interface Token {
  text: string;
  className: string;
}

export const useCodeHighlight = () => {
  return useCallback((code: string): Token[] => {
    const tokens = code.split(/(function|const|let|return|interface|type|:|=>|<|>|\(|\)|{|}|"|'|,|;)/);
    
    return tokens.map(part => {
      if (['function', 'const', 'let', 'return', 'interface', 'type'].includes(part)) {
        return {
          text: part,
          className: `text-[${COLORS.syntax.keyword}]`
        };
      }
      
      if ([':', '=>', '<', '>', '(', ')', '{', '}'].includes(part)) {
        return {
          text: part,
          className: `text-[${COLORS.syntax.operator}]`
        };
      }
      
      if (part.match(/".*"|'.*'/)) {
        return {
          text: part,
          className: `text-[${COLORS.syntax.string}]`
        };
      }
      
      if (part.match(/[A-Z][a-zA-Z]+/)) {
        return {
          text: part,
          className: `text-[${COLORS.syntax.type}]`
        };
      }
      
      return {
        text: part,
        className: `text-[${COLORS.syntax.comment}]`
      };
    });
  }, []);
};
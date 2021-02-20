import { css } from '@linaria/core';
import { BREAKPOINTS } from 'Theme/breakpoints';
import { COLORS } from 'Theme/colors';

export const section = css`
   position: fixed;
   width: 100%;
   height: 100%;

   top: 0;

   display: grid;
   grid-template: 1fr / 1fr;

   @media ${BREAKPOINTS.large} {
      grid-template: 1fr / 35% 1fr;
   }
`;

export const overlay = css`
   visibility: hidden;
   display: none;

   @media ${BREAKPOINTS.large} {
      visibility: visible;
      display: block;
      background: hsla(0, 0%, 0%, 0.6);

      @supports (backdrop-filter: blur(5px) grayscale(30%)) {
         backdrop-filter: blur(5px) grayscale(30%);
         background: unset;
      }
   }
`;

export const nav = css`
   z-index: 2;
   overflow: hidden;

   display: grid;
   grid-template: repeat(4, 1fr) / 1fr;
   place-items: center;
   row-gap: 3rem;

   background: ${COLORS.text};
   box-shadow: 0px 0px 2px black;

   padding: 10rem 0;
`;

export const anchor = css`
   width: 105%;
   height: 8rem;
   overflow: hidden;

   display: grid;
   place-items: center;

   transform: rotate(2deg);
   background: ${COLORS.text};
   box-shadow: 0px 0px 10px black;
   /** https://github.com/TypeNetwork/Decovar */
   font-family: 'Decovar';
   font-size: 4rem;
   text-shadow: 0px 0px 2px black;
   font-variation-settings: 'TRMA' 1000, 'WMX2' 200, 'SKLD' 0;
   text-transform: uppercase;
   transition: font-variation-settings 500ms cubic-bezier(0.7, -0.6, 0.3, 1.6),
      box-shadow 500ms ease, background-color 500ms ease 2s;

   &[data-active='active'] {
      cursor: default;
      box-shadow: 0px 0px 5px black;
      text-decoration: line-through;
   }

   &:focus:not([data-active='active']) {
      font-variation-settings: 'TRMA' 1000, 'WMX2' 500, 'SKLD' 500;
      box-shadow: 0px 0px 15px black;
      border: 2px solid red;
   }

   @media (hover: hover) and (pointer: fine) {
      &:hover:not([data-active='active']),
      &:focus:not([data-active='active']) {
         font-variation-settings: 'TRMA' 1000, 'WMX2' 500, 'SKLD' 500;
         box-shadow: 0px 0px 15px black;
      }
   }

   &:nth-child(odd) {
      transform-origin: left;
   }

   &:nth-child(even) {
      transform-origin: right;
   }

   &:nth-of-type(1) {
      color: ${COLORS.home};
   }

   &:nth-of-type(2) {
      color: ${COLORS.home};
   }

   &:nth-of-type(3) {
      color: ${COLORS.home};
   }

   &:nth-of-type(4) {
      color: ${COLORS.home};
   }
`;

export const span = css`
   pointer-events: none;
   display: grid;
   place-items: center;

   &[data-active='active'] {
      filter: blur(5px) grayscale(90%);
   }
`;

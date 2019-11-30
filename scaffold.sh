#!/bin/bash

# A script that scaffolds a new component
# Usage:   ./scaffold.sh ${type}   ${name}
# Example: ./scaffold.sh component HelloWorld

# Use this script's path
root_path="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"

# Check first parameter, component type
# Choose folder /components or /views
type_dir="components"
case ${1} in
  "component"|"comp"|"c")
    type_dir="components";;
  "views"|"view"|"v"|"pages"|"page"|"p")
    type_dir="views";;
  *) ;;
esac

# Determines component's path
src_path=${root_path}/src/${type_dir}/${2}

# Create & navigate to component path
# If directory exists, clean it
if [ -d ${src_path} ]
then
  cd ${src_path}
  rm -rf *
else
  mkdir ${src_path}
  cd ${src_path}
fi

# Create all files
touch index.vue script.ts styles.sass template.pug test.spec.ts

# Write paths in .vue file
printf '<template src="./template.pug" lang="pug" />\n<script src="./script.ts" lang="ts" />\n<style src="./styles.sass" lang="sass" scoped />\n' > index.vue

# Initialize vue component in .ts file
printf 'import { Component, Vue } from "vue-property-decorator"\n\n@Component\nexport default class %s extends Vue {}\n' ${2} > script.ts

# Write a simple test in test.spec.ts
printf 'import { shallowMount } from "@vue/test-utils"\nimport { expect } from "chai"\n\nimport %s from "./index.vue"\n\ndescribe("%s", () => {\n  it("mounts", () => {\n    const wrapper = shallowMount(%s)\n    expect(wrapper && wrapper.isVueInstance()).to.be.true\n  })\n})\n' ${2} ${2} ${2} > test.spec.ts
